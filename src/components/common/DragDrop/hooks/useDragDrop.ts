import React from "react";

const useDragDrop = (handler: (file?: File) => void) => {
  const [isDragging, setIsDragging] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<File>();

  const dragRef = React.useRef<HTMLLabelElement | null>(null);

  const handleChangeFiles = React.useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.DragEvent<HTMLInputElement>,
    ) => {
      let selectFiles: Array<File> = [];

      if (e.type === "drop") {
        const dragEvent = e as React.DragEvent<HTMLInputElement>;
        const { files } = dragEvent.dataTransfer;
        selectFiles = Array.from(files || []);
      } else {
        const changeEvent = e as React.ChangeEvent<HTMLInputElement>;
        const { files } = changeEvent.target;
        selectFiles = Array.from(files || []);
      }

      const [currentFile] = selectFiles;
      handler(currentFile);
      setFile(currentFile);
    },
    // eslint-disable-next-line
    [],
  );

  const handleDragIn = React.useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = React.useCallback((e: DragEvent) => {
    handleDragIn(e);
    setIsDragging(false);
    // eslint-disable-next-line
  }, []);

  const handleDragOver = React.useCallback((e: DragEvent) => {
    handleDragIn(e);
    if (e.dataTransfer) setIsDragging(true);
    // eslint-disable-next-line
  }, []);

  const handleDrop = React.useCallback(
    (e: DragEvent) => {
      handleDragIn(e);
      handleChangeFiles(e as unknown as React.DragEvent<HTMLInputElement>);
      setIsDragging(false);
    },
    // eslint-disable-next-line
    [handleChangeFiles],
  );

  const initDragEvents = React.useCallback(() => {
    if (dragRef.current) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = React.useCallback(() => {
    if (dragRef.current) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  React.useEffect(() => {
    initDragEvents();
    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return {
    handleChangeFiles,
    isDragging,
    dragRef,
    file,
  };
};

export default useDragDrop;

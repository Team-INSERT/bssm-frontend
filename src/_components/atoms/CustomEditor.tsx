import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import React from "react";
import { toast } from "react-toastify";
import MDEditor, {
  ContextStore,
  ICommand,
  MDEditorProps,
  getCommands,
} from "@uiw/react-md-editor";
import { UploadIcon } from "@/_assets/icons";
import { getImageUrl } from "@/_helpers";
import useModal from "@/_hooks/useModal";
import DragDrop from "./DragDrop";

type CustomEditorPropsType = MDEditorProps & React.RefAttributes<ContextStore>;

interface ICustomEditorProps extends CustomEditorPropsType {
  value: string;
}

const CustomEditor = ({ ...props }: ICustomEditorProps) => {
  const { openModal, closeModal } = useModal();

  const handleImageSelected = async (file: File | undefined) => {
    closeModal();
    const imageUrl = await getImageUrl(file);

    try {
      await navigator.clipboard.writeText(imageUrl);
      toast.success("이미지 주소를 클립보드에 저장했어요.");
    } catch (err) {
      toast.error("이미지를 업로드를 실패했습니다.");
    }
  };

  const handleImageUploaderClick = () => {
    openModal({
      component: (
        <DragDrop width="70vw" height="70vh" handler={handleImageSelected} />
      ),
    });
  };

  const imageUploader: ICommand = {
    name: "imageUploader",
    keyCommand: "imageUploader",
    icon: <UploadIcon onClick={handleImageUploaderClick} />,
  };

  return (
    <MDEditor
      {...props}
      preview="edit"
      commands={[...getCommands(), imageUploader]}
    />
  );
};

export default CustomEditor;

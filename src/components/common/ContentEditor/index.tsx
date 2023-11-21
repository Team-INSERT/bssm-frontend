import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { toast } from "react-toastify";
import MDEditor, {
  ContextStore,
  MDEditorProps,
  getCommands,
} from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { UploadIcon } from "@/assets/icons";
import { useModal } from "@/@modal/hooks";
import { useImageUpload } from "@/hooks";
import DragDrop from "../DragDrop";

type ContentEditorPropsType = MDEditorProps & React.RefAttributes<ContextStore>;

interface ContentEditorProps extends ContentEditorPropsType {
  value: string;
}

const ContentEditor = ({ ...props }: ContentEditorProps) => {
  const { openModal, closeModal } = useModal();
  const { uploadImage } = useImageUpload();

  const handleImageSelected = async (file?: File) => {
    try {
      const imageUrl = await uploadImage(file);
      await navigator.clipboard.writeText(imageUrl);
      toast.success("이미지 주소를 클립보드에 저장했어요.");
    } catch (err) {
      toast.error("이미지를 업로드에 실패했어요.");
    } finally {
      closeModal();
    }
  };

  const handleImageUploaderClick = () => {
    openModal({
      component: (
        <DragDrop width="70vw" height="70vh" handler={handleImageSelected} />
      ),
    });
  };

  const imageUploader = {
    name: "imageUploader",
    keyCommand: "imageUploader",
    icon: <UploadIcon onClick={handleImageUploaderClick} />,
  };

  return (
    <MDEditor
      {...props}
      preview="edit"
      commands={[...getCommands(), imageUploader]}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
    />
  );
};

export default ContentEditor;

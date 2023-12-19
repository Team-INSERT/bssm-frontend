import { render, screen, fireEvent } from "@testing-library/react";
import useModal from "./useModal";

jest.mock("./useModal");

const TestComponent = () => {
  const { openModal, closeModal } = useModal();
  return (
    <div>
      <button onClick={() => openModal({ component: <></> })}>Open</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

describe("useModal", () => {
  const mockUseModal = useModal as jest.MockedFunction<typeof useModal>;
  mockUseModal.mockReturnValue({
    openModal: jest.fn(),
    closeModal: jest.fn(),
    visible: false,
  });

  it("openModal이 호출되면 화면에 모달이 render 되어야 한다", async () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(mockUseModal().openModal).toHaveBeenCalled();
    expect(document.activeElement).toBeInstanceOf(HTMLElement);
  });

  it("closeModal이 호출되면 화면에 render된 모달이 unmount 되어야 한다.", () => {
    render(<TestComponent />);

    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(mockUseModal().closeModal).toHaveBeenCalled();
  });
});

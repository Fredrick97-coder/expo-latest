import { render, fireEvent } from "@testing-library/react-native";
import Button from "./Button";

describe("Button", () => {
  it("calls onPress function when the button is pressed", () => {
    mockOnPress = jest.fn();
    const { getByTestId } = render(<Button onPress={mockOnPress} />);
    const pressMeButton = getByTestId("Button:Button:ClickMe");
    fireEvent.press(pressMeButton);

    expect(mockOnPress).toHaveBeenCalled();
  });
});

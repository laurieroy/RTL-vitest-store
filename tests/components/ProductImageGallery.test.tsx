import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("when array is empty", () => {
  it("ProductImageGallery renders an empty dom", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});

describe("when array is not empty ", () => {
  it("ProductImageGallery renders a list of images", () => {
    const imageUrls = [
      "www.placeholder.net/1",
      "www.placeholder.net/2",
      "www.placeholder.net/3",
    ];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images.length).toEqual(3);
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});

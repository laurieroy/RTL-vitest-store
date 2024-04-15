import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const limit = 255;
  const longArticle = "a".repeat(limit + 1);
  const truncatedText = longArticle.substring(0, limit) + "...";
  const displayedText = "Short text";

  describe("when article <= than the limit (255 characters)", () => {
    it("shows all text", () => {
      render(<ExpandableText text={displayedText} />);

      expect(screen.getByText(displayedText)).toBeInTheDocument();
    });

    it("does not display a button", () => {
      render(<ExpandableText text={displayedText} />);

      const btn = screen.queryByRole("button");

      expect(btn).not.toBeInTheDocument();
    });
  });

  describe("when articles length is > limit (255 chars)", () => {
    it("truncates the article", () => {
      render(<ExpandableText text={longArticle} />);

      expect(screen.getByText(truncatedText)).toBeInTheDocument();
    });

    it('displays "Show More" button when text is truncated and "Show Less" when expanded', async () => {
      render(<ExpandableText text={longArticle} />);
      const showMoreBtn = screen.getByRole("button", { name: /more/i });

      expect(showMoreBtn).toBeInTheDocument();

      const user = userEvent.setup();
      await user.click(showMoreBtn);

      const showLessBtn = screen.getByRole("button", { name: /less/i });
      await user.click(showLessBtn);

      expect(screen.getByText(truncatedText)).toBeInTheDocument();
      expect(showMoreBtn).toHaveTextContent(/more/i);
    });
  });
});

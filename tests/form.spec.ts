import { expect, test } from "@playwright/test";

test("submits the form and shows success message", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const input = page.getByPlaceholder("Enter your name");
  await input.fill("Ali Radmanesh");

  await page.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByTestId("success-msg")).toHaveText("Form submitted!");
});

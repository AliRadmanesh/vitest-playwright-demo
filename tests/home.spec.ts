import { test, expect } from "@playwright/test";

test("homepage has expected text", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page.locator("text=Vite + React")).toBeVisible();
});

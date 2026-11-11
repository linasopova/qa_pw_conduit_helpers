import { expect, test } from '@playwright/test';

export class UserProfilePage {
  constructor(page) {
    this.page = page;
    this.articleDescriptionField = page.locator('p', {
      hasText: 'Article description:',
    });
  }

  async open() {
    await test.step(`Open 'User Profile' page`, async () => {
      await this.page.goto('/profile/*');
    });
  }

  async assertArticleDescriptionContainsText(description) {
    await // eslint-disable-next-line max-len
    test.step(`Assert the '${description}' article description is displayed`, async () => {
      await expect(this.articleDescriptionField).toContainText(description);
    });
  }
}

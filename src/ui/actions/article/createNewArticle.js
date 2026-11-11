import { CreateArticlePage } from '/Users/alinasopova/Desktop/Mate Automation Projects/qa_pw_conduit_helpers/src/ui/pages/article/CreateArticlePage.js';
import { ViewArticlePage } from '/Users/alinasopova/Desktop/Mate Automation Projects/qa_pw_conduit_helpers/src/ui/pages/article/ViewArticlePage.js';
import { test } from '@playwright/test';

export async function createNewArticle(page, article) {
  await test.step(`Create new article`, async () => {
    const createArticlePage = new CreateArticlePage(page);
    const viewArticlePage = new ViewArticlePage(page);

    await createArticlePage.open();
    await createArticlePage.fillTitleField(article.title);
    await createArticlePage.fillDescriptionField(article.description);
    await createArticlePage.fillTextField(article.text);

    for (const tag of article.tags) {
      await createArticlePage.fillTagsField(tag);
    }

    await createArticlePage.clickPublishArticleButton();

    await viewArticlePage.assertArticleTitleIsVisible(article.title);
    await viewArticlePage.assertArticleTextIsVisible(article.text);

    // eslint-disable-next-line playwright/no-conditional-in-test
    if (article.tags.length > 0) {
      await viewArticlePage.assertArticleTagListIsVisible(article.tags);
    }
  });
}

import { CreateArticlePage } from '/Users/alinasopova/Desktop/Mate Automation Projects/qa_pw_conduit_helpers/src/ui/pages/article/CreateArticlePage.js';
import { ViewArticlePage } from '/Users/alinasopova/Desktop/Mate Automation Projects/qa_pw_conduit_helpers/src/ui/pages/article/ViewArticlePage.js';
import { test } from '@playwright/test';

export async function createNewArticleWithTags(page, article) {
  await test.step(`Create new article with tags`, async () => {
    const createArticlePage = new CreateArticlePage(page);
    const viewArticlePage = new ViewArticlePage(page);

    await createArticlePage.open();
    await createArticlePage.fillTitleField(article.title);
    await createArticlePage.fillDescriptionField(article.description);
    await createArticlePage.fillTextField(article.text);
    await createArticlePage.fillTagsField(article.tags[0]);
    await createArticlePage.clickPublishArticleButton();

    await viewArticlePage.assertArticleTitleIsVisible(article.title);
    await viewArticlePage.assertArticleTextIsVisible(article.text);
    await viewArticlePage.assertArticleTagListIsVisible(article.tags);
  });
}

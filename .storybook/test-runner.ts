import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 };

const config: TestRunnerConfig = {
  async preVisit(page, story) {
    // Accesses the story's parameters and retrieves the viewport used to render it
    const context = await getStoryContext(page, story);
    const viewportName = context.parameters?.viewport?.defaultViewport;
    const viewportParameter = INITIAL_VIEWPORTS[viewportName];

    if (viewportParameter) {
      const viewportSize = Object.entries(viewportParameter.styles).reduce(
        (acc, [screen, size]) => ({
          ...acc,
          // Converts the viewport size from percentages to numbers
          [screen]: parseInt(size),
        }),
        {},
      );
      // Configures the Playwright page to use the viewport size
      page.setViewportSize(viewportSize);
    } else {
      page.setViewportSize(DEFAULT_VIEWPORT_SIZE);
    }
  },
};

export default config;

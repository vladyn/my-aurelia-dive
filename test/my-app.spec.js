import {render} from './helper';
import {MyApp} from '../src/components/my-app';

describe('my-app', () => {
    it('should render message', async () => {
        const node = (await render(MyApp, '')).firstElementChild;
        const text = node.textContent;
        expect(text.trim()).toBe('Hello World!');
    });
});

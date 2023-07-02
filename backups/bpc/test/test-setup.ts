// test-setup.ts
import { JSDOM } from 'jsdom';


const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', {
	url: 'http://example.com/',
});

(global as any).window = dom.window;
(global as any).document = dom.window.document;
(global as any).navigator = dom.window.navigator;


global.Image = window.Image;
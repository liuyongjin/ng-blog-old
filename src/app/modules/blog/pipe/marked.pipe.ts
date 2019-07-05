import { Pipe, PipeTransform } from '@angular/core';
import marked from 'marked';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import less from 'highlight.js/lib/languages/less';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('less', less);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('typescript', typescript);


@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    
    const renderer = new marked.Renderer()

    // 段落解析
    const paragraphParse = text => `<p>${text}</p>`
    
    // 链接解析
    const linkParse = (href, title, text) => {
      return `<a href=${href}
          title=${title || href}
          target='_blank'
          }>${text}</a>`
    }
    
    renderer.paragraph = paragraphParse
    renderer.link = linkParse
    
    if (typeof value != 'string') return '';
    return marked(value, { renderer });
  }
}

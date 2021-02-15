import { model } from './model';
import { templates } from './templates'

export function site(site) {
  model.forEach(block => {
    let html = templates[block.type];
    if (html) {
      site.insertAdjacentHTML('beforeend', html(block))
    }
  })
}
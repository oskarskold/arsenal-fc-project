import { InternalLinkRender } from './internalLink';

export default {
  title: 'Internal link to another Site Page',
  name: 'internalLinkCustom',
  type: 'reference',
  description: 'Locate a document you want to link to',
  to: [{ type: 'sitePage' }],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
};

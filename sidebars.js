// @ts-check

// One sidebar for the whole site: the header carries the cinefin.dev links,
// so the doc sections live here, as the site's eyebrow-style group labels.
const section = (label, items) => ({type: 'category', label, collapsible: false, items});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {type: 'doc', id: 'index', label: 'Overview'},
    section('Getting started', [
      {type: 'doc', id: 'getting-started/index', label: 'Before you start'},
      'getting-started/installation',
      'getting-started/quickstart',
    ]),
    section('User guide', [
      'guide/library-sync',
      'guide/templates',
      'guide/programmes',
      'guide/scheduling',
      'guide/playback',
      'guide/system-ident',
      'guide/commands-plugins',
    ]),
    section('Reference', ['reference/configuration', 'reference/environment', 'reference/api']),
    section('About', ['about/contributing', 'about/license']),
  ],
};

export default sidebars;

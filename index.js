export default function (kibana) {
  return new kibana.Plugin({
   uiExports: {
     app: {
        title: 'kibana-css-reduce_viz_pad',
        order: -100,
        description: 'Reduce Visualization Padding (CSS)',
        main: 'plugins/kibana-css-reduce_viz_pad/index.js',
        hidden: true
     }
    }
  });
};

# kibana-css-reduce_viz_pad
Kibana plugin to reduce padding of visualizations.

# Setup
#### 1. Clone the repository to `kibana/plugins`
#### 2. Edit `kibana/src/ui/ui-render/bootstrap/template.js.hbs`
Find this section...
```
var files = [
  bundleFile('vendors.style.css'),
  bundleFile('commons.style.css'),
  bundleFile('{{appId}}.style.css'),

  bundleFile('vendors.bundle.js'),
  bundleFile('commons.bundle.js'),
  bundleFile('{{appId}}.bundle.js')
];
```
Add `bundleFile('kibana-css-reduce_viz_pad.style.css'),` after the line `bundleFile('commons.style.css'),`

The result should look as follows:
```
var files = [
  bundleFile('vendors.style.css'),
  bundleFile('commons.style.css'),
  bundleFile('kibana-css-reduce_viz_pad.style.css'),
  bundleFile('{{appId}}.style.css'),

  bundleFile('vendors.bundle.js'),
  bundleFile('commons.bundle.js'),
  bundleFile('{{appId}}.bundle.js')
];
```

#### 3. Restart Kibana
When Kibana is restarted you will see a message (or log entry) similar to the following:
```
[info][optimize] Optimizing and caching bundles for ml, kibana-css-reduce_viz_pad, stateSessionStorageRedirect, status_page, timelion, graph, monitoring, login, logout, dashboardViewer, apm and kibana. This may take a few minutes
```
**Be patient!** After Kibana has successfully started you should observe that visualizations utilize significantly less padding than before.

## BEFORE
![BEFORE](https://user-images.githubusercontent.com/10326954/43687456-b000cce8-98d5-11e8-98a3-77913e53d242.png)

## AFTER
![AFTER](https://user-images.githubusercontent.com/10326954/43687457-b40d6c56-98d5-11e8-9c8a-97be6843b406.png)

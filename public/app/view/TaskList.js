Ext.define('ToDo.view.TaskList', {
  extend: 'Ext.Panel',
  alias: 'widget.home',
  requires: [
  'Ext.List',
  'ToDo.model.TaskList'
  ],
  config: {
   cls: 'task-list',
   items: [{
    width: Ext.os.deviceType == 'Phone' ? null : 300,
    height: Ext.os.deviceType == 'Phone' ? null : 500,
    xtype: 'list',
    data: [
    { title: 'Item 1', 
    items:[
    {title:22}
    ] },
    { title: 'Item 2' },
    { title: 'Item 3' },
    { title: 'Item 4' }
    ],
    itemTpl: '<div class="tasklist"><strong>{title}</strong></div>',
    variableHeights: false
  }]
}
});

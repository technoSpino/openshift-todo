Ext.define('ToDo.view.CustomList', {
  extend: 'Ext.DataView',
  xtype: 'custom-list',
  config: {
    cls: 'task-list',
    height:'100%',
    variableHeights: false,
    useComponents: true
  }
});
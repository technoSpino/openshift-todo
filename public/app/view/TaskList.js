Ext.define('ToDo.view.TaskList', {
  extend: 'Ext.Panel',
  alias: 'widget.home',
  requires: ['Ext.List', 'ToDo.model.TaskList'],
  config: {
    cls: 'task-list',
    items: [
      {
      docked: 'top',
      xtype: 'titlebar',
      items: [
        {
        html: "TaskList"
      }]
    },
          {
      width: Ext.os.deviceType == 'Phone' ? null : 300,
      height: Ext.os.deviceType == 'Phone' ? null : 500,
      variableHeights: false,
      itemTpl: '<div class="tasklist"><strong>{listName}</strong></div>',
      xtype: 'list',
      store: 'TaskList'
    }]
  }
});
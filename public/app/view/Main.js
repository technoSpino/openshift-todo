Ext.define('ToDo.view.Main', {
  extend: 'Ext.NavigationView',
  alias: 'widget.task-list',
  requires: ['Ext.List', 'ToDo.model.Project',
             'ToDo.view.project.ProjectItem', 'ToDo.model.Project', 'ToDo.view.CustomList'],
  config: {
    id:'projectList',
    cls: 'task-list',
    width: Ext.os.deviceType == 'Phone' ? null : 300,
    height: Ext.os.deviceType == 'Phone' ? null : 500,
    
    navigationBar: {
      items: [{
        id:'add',
        xtype: 'button',
        align: 'right',
        iconCls: 'add',
        iconMask: true
      }]
    },
    
    items: [{
      title:'Projects',
      variableHeights: false,
      xtype: 'custom-list',
      defaultType: 'project-item',
      store: 'Projects'
      //change
    }]
  }
    
});
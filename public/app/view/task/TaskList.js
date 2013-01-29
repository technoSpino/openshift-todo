Ext.define('ToDo.view.task.ProjectList', {
  extend: 'Ext.DataView',
  alias: 'widget.project-list',
  requires: ['ToDo.view.project.ProjectItem', 'ToDo.model.Project'],
  config: {
    cls: 'task-list',
    height:'100%',
    variableHeights: false,
    useComponents: true
   
  }
});
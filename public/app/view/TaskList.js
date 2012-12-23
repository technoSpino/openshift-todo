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
    	    store: 'TaskList',
            itemTpl: '<div class="tasklist"><strong>Test {listName}</strong></div>',
            variableHeights: false
        }]
    }
});

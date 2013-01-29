Ext.define('ToDo.controller.ProjectController', {
    extend: 'Ext.app.Controller',

    config: {
        control:{
            addButton:{
                tap:'addProject'
            },
            project:{
                tap:'openProject'
            },
            deleteButton:{
                tap:'deleteRecord'
            }
        },

        refs: {
            addButton: '#add',
            deleteButton: 'button[action="delete"]',
            project: 'button[action="open"]',
            projectList:'#projectList',
            currentList:'custom-list'
        }
    },

    addProject: function(a,b,c,d) {
        Ext.Msg.prompt(
            'New Project',
            'Title:',
            function (buttonId, value) {
                var store = this.getProjectList().getActiveItem().getStore()
                store.add({title:value});
                store.sync();
            },
            this,
            false,
            null,
            { autoCapitalize : true, placeHolder : 'Title' }
            );
    },
    openProject:function(a,b,c,d){

        var data = a.getParent().getRecord();
        this.getProjectList().push({
            title: data.get('title'),
            xtype: 'custom-list',
            defaultType: 'project-item',
            store: data.tasks()
        });
        
    },
    deleteRecord:function(a,b,c,d){
        var data = a.getParent().getRecord();
        data.erase();
        a.getParent().destroy();
    }
});
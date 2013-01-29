Ext.define('ToDo.view.project.ProjectItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.Button'],
    xtype: 'project-item',

    config: {
        layout:'hbox',
        title:{flex:3, action:'open'},
        deleteButton: {action:'delete',iconMask: true,iconCls:'delete',flex:1},

        dataMap: {
            getTitle:{
                setHtml:'title'
            },
            getDeleteButton: {
                
            }
        }
    },

    applyDeleteButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getDeleteButton());
    },

    updateDeleteButton: function(newDeleteButton, oldDeleteButton) {
        if (oldDeleteButton) {
            this.remove(oldDeleteButton);
        }

        if (newDeleteButton) {
            this.add(newDeleteButton);
        }
    },

    applyTitle: function(config) {
        return Ext.factory(config, Ext.Button, this.getTitle());
    },

    updateTitle: function(newTitleButton, oldTitleButton) {
        if (oldTitleButton) {
            this.remove(oldTitleutton);
        }

        if (newTitleButton) {
            this.add(newTitleButton);
        }
    }
});
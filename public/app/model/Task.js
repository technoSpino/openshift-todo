Ext.define('ToDo.model.Task', {
    extend: 'Ext.data.Model',

    config: {
        identifier: 'uuid',
        fields: ['id','title','description'],
        associations: [
            {type: 'belongsTo', ownerModel: 'ToDo.model.Project', associatedModel: 'ToDo.model.Project', name: 'list'},
        
        ]
    }
});
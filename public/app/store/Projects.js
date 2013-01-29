Ext.define("ToDo.store.Projects", {
    extend: 'Ext.data.Store',
    alias: 'store.Projects',
    requires:['ToDo.model.Project'],
    config: {
        model: 'ToDo.model.Project',
        sorters: 'title',
        autoLoad:true
    }
});

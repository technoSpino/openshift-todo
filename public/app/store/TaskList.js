Ext.define("ToDo.store.TaskList", {
    extend: 'Ext.data.Store',
    alias: 'store.TaskList',
    config: {
        model: 'ToDo.model.TaskList',
        sorters: 'name',
        data: [
            {name: "Homework"},
            {name: "Groceries"},
            {name: "Housework"},
            {name: "Movies"},
            {name: "Bucket List"}
        ]
    }
});

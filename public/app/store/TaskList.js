Ext.define("ToDo.store.TaskList", {
    extend: 'Ext.data.Store',
    alias: 'store.TaskList',
    config: {
        model: 'ToDo.model.TaskList',
        sorters: 'listName',
        autoLoad:true
        // data: [
        //     {
        //         listName: "Homework",
        //         taskItems:[{
        //             id:1,
        //             title:'Chemistry', 
        //             description:'Chapter 1 Questions'
        //         }]
        //     },
        //     {listName: "Groceries"},
        //     {listName: "Housework"},
        //     {listName: "Movies"},
        //     {listName: "Bucket List"}
        // ]
    }
});

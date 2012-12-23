Ext.define('ToDo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'TaskList',
                iconCls: 'compose',
                id: 'homepage',
                xtype: 'home'
            }
        ]
    }
});

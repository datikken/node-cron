module.exports = (() => {
    if(!global.scheduledTasks){
        global.scheduledTasks = new Map();
    }

    return {
        reset: () => {
            return global.scheduledTasks = new Map();
        },
        save: (task) => {
            if(!task.options){
                const uuid = require('uuid');
                task.options = {};
                task.options.name = uuid.v4();
            }
            global.scheduledTasks.set(task.options.name, task);
        },
        getTasks: () => {
            return global.scheduledTasks;
        }
    };
})();

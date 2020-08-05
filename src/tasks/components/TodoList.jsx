import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import * as tasksActions from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';

class TodoList extends Component {

    componentDidMount() {
        this.props.getTasksList();

    }

    // handleTaskCreate = text => {
    //    this.props.createTask(text);
    // };

    render() {
        return (
            <>
                <h1 className="title">Todo List</h1>
                <main className="todo-list">
                    <CreateTaskInput onCreate={this.props.createTask} />
                    <TasksList
                        tasks={this.props.tasks}
                        handleTaskStatusChange={this.props.updateTask}
                        handleTaskDelete={this.props.deleteTask}
                    />
                </main>
            </>
        );
    };
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape()),
    getTasksList: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
};


const mapDispatch = {
    getTasksList: tasksActions.getTasksList,
    updateTask: tasksActions.updateTask,
    deleteTask: tasksActions.deleteTask,
    createTask: tasksActions.createTask,
};

const mapState = state => {
    return {
        tasks: sortedTasksListSelector(state)
    };
}

export default connect(mapState, mapDispatch)(TodoList);
Vue.component('TodoItem', {
  template: `
    <div>
      <span :class="{ crossed: task.done }">{{ task.text }}</span>
      <button class="done" @click="toggleTask">{{ toggleBtnText }}</button>
      <button class="delete" :class="{disable: !task.done}" @click="deleteTask">Effacer</button>
    </div>
  `,
  props: {
    task: { type: Object, required: true }
  },
  computed: {
    toggleBtnText () {
      return this.task.done ? 'A faire' : 'Fait'
    }
  },
  methods: {
    toggleTask () {
      this.$emit('toggle', this.key)
    },
    deleteTask () {
      if (this.task.done) {
        this.$emit('delete')
      }
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    newTaskField: '',
    tasksList: []
  },
  methods: {
    addTask () {
      const newTask = {
        text: this.newTaskField,
        done: false
      }
      this.tasksList.push(newTask)
      this.newTaskField = ''
    },
    toggle (i) {
      this.tasksList[i].done = !this.tasksList[i].done
    },
    deleteTask (i) {
      this.tasksList.splice(i, 1)
    }
  }
})

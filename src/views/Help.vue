<template>
  <app-page back title="помощь">
    <question-item
    v-for="q in question"
    :key="q.title"
    :question="q"
    ></question-item>
  </app-page>
</template>

<script>
  import AppPage from "../components/ui/AppPage";
  import QuestionItem from "../components/questions/QuestionItem";
  export default {
    setup() {
      const question = [
        {title: 'Что есть в данной системе?', text: 'Тут есть всебдля того,чтобы смотреть заявки'},
        {title: 'Как тут работает авторизация?', text: 'Все реализовано через Firebase'}
      ]
      return {question}
    },
    components: {AppPage, QuestionItem}
  }

</script>
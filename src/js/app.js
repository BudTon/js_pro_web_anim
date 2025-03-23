import CreatedWidget from '../components/wiget/сreatedWidget';
import CreatedCollapsible from '../components/collapsible/createdCollapsible';
import CreatedCallbackChat from '../components/callback_chat/createdCallbackChat';
import CreatedLikeBox from '../components/likeMove/createdLikeBox';
import taskCollapse from '../components/functional/taskCollapser';
import taskCallbackChat from '../components/functional/taskCallbackChat';
import taskLiker from '../components/functional/taskLiker';

const parent = document.querySelector('.container');
/* eslint-disable no-new */
new CreatedWidget(parent);

const parentTask = document.querySelector('.container-task');

const btnCollapse = document.querySelector('.btn-collapse');
btnCollapse.addEventListener('click', () => {
  parentTask.innerHTML = '';
  /* eslint-disable no-new */
  new CreatedCollapsible(parentTask);
  taskCollapse();
});

const btnCallbackChat = document.querySelector('.btn-callback-chat');
btnCallbackChat.addEventListener('click', () => {
  parentTask.innerHTML = '';
  /* eslint-disable no-new */
  new CreatedCallbackChat(parentTask);
  taskCallbackChat();
});

const btnLiker = document.querySelector('.btn-liker');
btnLiker.addEventListener('click', () => {
  parentTask.innerHTML = '';
  /* eslint-disable no-new */
  new CreatedLikeBox(parentTask);
  taskLiker();
});

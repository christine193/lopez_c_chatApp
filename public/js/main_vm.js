import ChatMessage from './modules/ChatMessage.js';

const socket = io();

function logConnect({ sID, message }) { // sID, message
	console.log(sID, message);
	vm.socketID = sID;
}

function appendMessage(message) {
	vm.messages.push(message);
}

function updateScroll() {
	var element = document.getElementById("msgs");
	element.scrollTop = element.scrollHeight;
}

function scrollDelay() {
	setTimeout(updateScroll, 100);
}

function shakeContainer() {
	document.getElementbyId("shakeBtn").className += "shake";
}


// create vue instance
const vm = new Vue({
	data: {
		socketID: "",
		nickname: "",
		message: "",
		messages: []
	},

	methods: {
		dispatchMessage() {
			socket.emit('chat message', { content: this.message, name: this.nickname || "Anonymous" });
			// reset the message field
			this.message = "";
		}

	},



	components: {
		newmessage: ChatMessage
	}

}).$mount(`#app`);

socket.addEventListener('onClick', shakeContainer);
socket.on('connected', logConnect);
socket.addEventListener('chat message', appendMessage);
socket.addEventListener('chat message', scrollDelay);
socket.addEventListener('disconnect', appendMessage);
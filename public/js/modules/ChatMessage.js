export default {
	props: ['msg'],

	template: `
        <p class="animated fadeInUp new-message" :class="{ 'my-message' : matchedID }">
            <span>{{msg.message.name}}</span>
            {{msg.message.content}}
        </p>
    `,

	data: function () {
		return {
			matchedID: this.$parent.socketID == this.msg.id
		}
	}
}
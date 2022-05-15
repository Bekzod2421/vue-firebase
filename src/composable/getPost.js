import { ref } from "@vue/reactivity";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase/config"

const getPost = (col, id) => {
	const post = ref([])
	const error = ref(null)
	const load = async () => {
		try {
			const res = doc(db, col, id)
			console.log(res);
			onSnapshot(res, (doc) => {
				post.value = doc.data()
				console.log("post", post.value);
			})
		}
		catch (err) {
			error.value = err.message
		}
	}

	return { post, error, load }
}

export default getPost

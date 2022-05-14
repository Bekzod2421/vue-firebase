import { ref } from "@vue/reactivity";
import { getDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase/config"

const getPost = (col, id) => {
	const post = ref([])
	const error = ref(null)
	const load = async () => {
		try {
			const res = doc(db, col, id)
			onSnapshot(res, (doc) => {
				console.log("data", doc.data());
			})
		}
		catch (err) {
			error.value = err.message
		}
	}

	return { post, error, load }
}

export default getPost

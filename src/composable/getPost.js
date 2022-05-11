import { ref } from "@vue/reactivity";
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from "../firebase/config"

const getPost = (col, id) => {
	const post = ref([])
	const error = ref(null)
	const load = async () => {
		try {
			const res = collection(doc(db, col, id))
			getDoc(res).then((doc) => {
				console.log(doc.data())
			})
				.catch(err => {
					error.value = err.message
				})
		}
		catch (err) {
			error.value = err.message
		}
	}

	return { post, error, load }
}

export default getPost
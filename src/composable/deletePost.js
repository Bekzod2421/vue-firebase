import { ref } from "@vue/reactivity";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from "../firebase/config"

const deletePost = (col, id) => {
	const done = false
	const error = ref(null)
	const load = async () => {
		try {
			const res = doc(db, col, id)
			console.log(id);
			deleteDoc(res).then(() => {
				alert("Delete")
			})
		}
		catch (err) {
			error.value = err.message
		}
	}

	return { done, error, load }
}

export default deletePost

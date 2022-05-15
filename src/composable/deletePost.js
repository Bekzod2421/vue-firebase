import { ref } from "@vue/reactivity";
import { deleteDoc } from 'firebase/firestore';
import { db } from "../firebase/config"

const deletePost = (col, id) => {
	const error = ref(null)
	const load = async () => {
		try {
			const res = doc(db, col, id)
			// console.log(res);
			deleteDoc(res).then(() => {
				alert("Post deleted")
			})
		}
		catch (err) {
			error.value = err.message
		}
	}

	return { error, load }
}

export default deletePost

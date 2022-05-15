import { ref } from "@vue/reactivity";
import { deleteDoc } from 'firebase/firestore';
import { db } from "../firebase/config"

const deletePost = (col, id) => {
	const error1 = ref(null)
	const loadDelete = async () => {
		try {
			const res = doc(db, col, id)
			// console.log(res);
			deleteDoc(res).then(() => {
				alert("Post deleted")
			})
		}
		catch (err) {
			error1.value = err.message
		}
	}

	return { error1, loadDelete }
}

export default deletePost

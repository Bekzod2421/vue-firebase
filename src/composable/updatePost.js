import { ref } from "@vue/reactivity";
import { updateDoc, doc } from 'firebase/firestore';
import { db } from "../firebase/config"

const undatePost = (col, id, post) => {
	const done = false
	const error = ref(null)
	const load = async () => {
		try {
			const res = doc(db, col, id)
			console.log(id);
			updateDoc(res, { post })
		}
		catch (err) {
			error.value = err.message
		}
	}

	return { done, error, load }
}

export default undatePost

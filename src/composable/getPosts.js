import { ref } from "@vue/reactivity";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config"

const getPosts = (col) => {
	const posts = ref([])
	const error = ref(null)
	const load = async () => {
		try {
			const res = collection(db, col)
			getDocs(res).then((snapshot) => {
				snapshot.docs.forEach((item) => {
					posts.value.push({ ...item.data(), id: item.id })
				})
			})
				.catch(err => {
					error.value = err.message
				})
		}
		catch (err) {
			error.value = err.message
		}
	}

	return { posts, error, load }
}

export default getPosts
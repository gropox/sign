import { useEffect, useState } from "react"


export default function ApiNodes() {

    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch("https://raw.githubusercontent.com/golos-blockchain/golos-links/main/api-nodes.json")
            .then(result => result.json())
            .then(result => setNodes(result), error => console.log("unable to load nodes from hithub"));
        }
        fetchData();
    }, [])

    return (
        nodes.map(node => (
            <option key={node.url} value={node.url}>{node.name}</option>
        ))
    )
}
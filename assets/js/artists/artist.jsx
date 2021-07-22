import {render, unmountComponentAtNode} from 'react-dom'
import React, {useEffect} from 'react'
import {usePaginatedFetch} from "./hooks";
import {Icon} from "../components/Icon";

function artists() {
    const {items: articles, load, loading, count, hasMore} = usePaginatedFetch('/api/artists')
    useEffect(() => {
        load()
    }, [])

    return <div>
        {loading && 'Chargement...'}
        <Title count={count}/>
        {articles.map(a => <Article key={a.id} article={a} /> )}
        {hasMore && <button disabled={loading} className="btn btn-primary" onClick={load}>Charger plus d'artiste</button> }
    </div>
}

const Artist = React.memo(({artist}) => {
    return <div className="row artist-detail">
        <h4>
            <strong>{artist.name}</strong>
            nombre de fans <strong>{artist.nbFan}</strong>
        </h4>
    </div>
})

function Title({count}) {
    return <h3>
        <Icon icon="artists"/>
        {count} Artiste{count > 1 ? 's' : ''}</h3>
}

class ArtistsElement extends HTMLElement {
    connectedCallback() {
        const artist = parseInt(this.dataset.artist, 10)
        render(<Artists/>, this)
    }

    disconnectedCallback()
    {
        unmountComponentAtNode(this)
    }
}

customElements.define('artists', ArtistsElement)
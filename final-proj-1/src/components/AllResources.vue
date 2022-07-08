<template>
    <base-card>
        <!-- this click falls throgh and add on the nativ button element in the base-button.vue  -->
        <base-button @click="setSelectedTab('stored-resource')" :mode="storedBtnMode">Stored Resources</base-button> 
        <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
        <keep-alive>
            <component :is="tabSelected"></component>
        </keep-alive>
    </base-card>
</template>

<script>
import BaseCard from './BaseCard.vue'
import BaseButton from './BaseButton.vue'
import AddResource from './AddResource.vue'
import StoredResource from './StoredResource.vue'
export default {
    components: {
        BaseButton,
        BaseCard,
        AddResource,
        StoredResource
    },
    data() {
        return {
            tabSelected: 'stored-resource',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official vue js documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google......',
                    link: 'https://google.org'
                }
            ]
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResources: this.removeResources
        }
    },
    computed: {
        storedBtnMode() {
            return this.tabSelected === 'stored-resource' ?  null : 'flat';
        },
        addResourceBtnMode() {
            return this.tabSelected === 'add-resource' ?  null : 'flat';
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.tabSelected = tab;
        },
        addResource(title, desc, url) {
            const newRes = {
                id: new Date().toISOString(),
                title: title,
                description: desc,
                link: url
            }
            this.storedResources.unshift(newRes);
            this.tabSelected = 'stored-resource';
        },
        removeResources(id) {
            // this.storedResources = this.storedResources.filter(res => res.id !== id);
            const index = this.storedResources.findIndex(res => res.id === id);
            this.storedResources.splice(index, 1)
        }
    }
}
</script>
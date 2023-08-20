import { Component } from '@angular/core';

type Todo = {
	icon?: string;
	desc?: string;
	completed?: boolean;
};

@Component({
	templateUrl: './todo-page.component.html'
})
export class TodoPageComponent {
	todos: Todo[] = [
		{ icon: '📄', desc: 'Somehow create data lists from markdown frontmatter to build out catagories and listing page, home page.', completed: false },
		{ icon: '⭐', desc: 'Add component for YouTube embeds' },
		{ icon: '⭐', desc: 'create link component and use tailwind inside instead of using an apply in scss file.' },
		{ icon: '😍', desc: 'Create a fix for Tringlify lib for @Typed library.' },
		{ icon: '📄', desc: 'Add SEO for website', completed: false },
		{ icon: '📄', desc: 'Add directive for container?', completed: false },
	];
}

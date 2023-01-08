import React from 'react';
import Badge from './../../../components/Bagde';
import { ComponentMeta } from '@storybook/react'

export default {
	title: "Components/Badge/Example",
	component: Badge
} as ComponentMeta<typeof Badge>;

export const Success = (args: any) => <Badge {...args}> Success</Badge>
Success.args = {
	state: "success",
}
import React, { useMemo } from 'react';
import { Group } from '@vx/group';
import { Tree, hierarchy } from '@vx/hierarchy';
import { HierarchyPointNode } from '@vx/hierarchy/lib/types';
import { LinkHorizontal } from '@vx/shape';
import { LinearGradient } from '@vx/gradient';
import defaultSpotify from './defaultSpotift.png';

const peach = '#fd9b93';
const pink = '#fe6e9e';
const blue = '#03c0dc';
const green = '#26deb0';
const plum = '#71248e';
const lightpurple = '#374469';
const white = '#ffffff';
export const background = '#272b4d';

interface TreeNode {
  name: string;
  artist: string;
  children?: this[];
}

type HierarchyNode = HierarchyPointNode<TreeNode>;

const rawTree: TreeNode = {
  name: 'Save Your Tears\n(with Ariana Grande)(Remix)',
  artist: '\n-The Weeknd, Ariana Grande',
  children: [
    {
      name: 'Dead to Me',
      artist: '\n-Kali Uchis',
      children: [

        { name: 'MONTERO (Call Me By Your Name', 
        artist: '\n-Lil Nas X',},
        
        
        {
          name: 'Wait A Minute!',
          artist: '\n-WILLOW',
          children: [
            {
              name: 'Imagination',
              artist: '\n-Foster The People',
            },
            {
              name: 'Woman On The Moon (feat. UPSAHL)',
              artist: '\n-Yung Bae',
              children: [
                {
                  name: 'Problems',
                  artist: '\n-Hey Violet',
                },
                {
                  name: 'Icy',
                  artist: '\n-Pink Sweat$',
                },
              ],
            },
          ],
        },
      ],
    },
      
    {
      name: 'Easy (With Kacey Musgraves feat. Mark Ronson)', artist: '\n-Troye Sivan',
      children: [{ name: 'Dandelion', artist: '\n-Galantis, JVKE'}, { name: 'Musician', artist: '\n-Porter Robinson',}],
    },
  ],
};

/** Handles rendering Root, Parent, and other Nodes. */
function Node({ node }: { node: HierarchyNode }) {
  const width = 128;
  const height = 128;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const isRoot = node.depth === 0;
  const isParent = !!node.children;

  if (isRoot) return <RootNode node={node} />;
  if (isParent) return <ParentNode node={node} />;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={background}
        stroke={green}
        strokeWidth={1}
        strokeDasharray="2,2"
        strokeOpacity={0.6}
        rx={10}
        onClick={() => {
          alert(`clicked: ${JSON.stringify(node.data.name)}`);
        }}
      />
      <div>
        <image
          height={128}
          width={128}
          y={node.y}
          x={node.x}
          
        />
      </div>
      <text
        dy=".33em"
        fontSize={12}
        fontFamily="Arial"
        textAnchor="middle"
        fill={green}
        style={{ pointerEvents: 'none' }}
      >
        {node.data.name}
      </text>
      <text
        dy="20"
        fontSize={12}
        fontFamily="Arial"
        textAnchor="middle"
        fill={green}
        style={{ pointerEvents: 'none' }}
      >
        {node.data.artist}
      </text>
    </Group>
  );
}

function RootNode({ node }: { node: HierarchyNode }) {
  return (
    <Group top={node.x} left={node.y+114}>
      <circle r={114} fill="url('#lg')" />
      <text
        dy=".33em"
        fontSize={20}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={plum}
        text-overflow={'ellipsis'}
        lengthAdjust={10}
      >
        {node.data.name}
      </text>
      <text
        dy="30"
        fontSize={20}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={plum}
        text-overflow={'ellipsis'}
        lengthAdjust={10}
      >
        {node.data.artist}
      </text>
    </Group>
  );
}

function ParentNode({ node }: { node: HierarchyNode }) {
  const width = 128;
  const height = 128;
  const centerX = -width / 2;
  const centerY = -height / 2;

  return (
    <Group top={node.x} left={node.y}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={background}
        stroke={blue}
        strokeWidth={1}
        onClick={() => {
          alert(`clicked: ${JSON.stringify(node.data.name)}`);
        }}
      />
      <text
        dy=".33em"
        fontSize={12}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none'}}
        fill={white}
      >
        {node.data.name}
      </text>
      <text
        dy="20"
        fontSize={12}
        fontFamily="Arial"
        textAnchor="middle"
        style={{ pointerEvents: 'none'}}
        fill={white}
      >
        {node.data.artist}
      </text>
    </Group>
  );
}

const defaultMargin = { top: 10, left: 80, right: 80, bottom: 10 };

type Props = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export default function Example({ width, height, margin = defaultMargin }: Props) {
  const data = useMemo(() => hierarchy(rawTree), []);
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <LinearGradient id="lg" from={peach} to={pink} />
      <rect width={width} height={height} rx={14} fill={background} />
      <Tree<TreeNode> root={data} size={[yMax, xMax]}>
        {tree => (
          <Group top={margin.top} left={margin.left}>
            {tree.links().map((link, i) => (
              <LinkHorizontal
                key={`link-${i}`}
                data={link}
                stroke={lightpurple}
                strokeWidth="1"
                fill="none"
              />
            ))}
            {tree.descendants().map((node, i) => (
              <Node key={`node-${i}`} node={node} />
            ))}
          </Group>
        )}
      </Tree>
    </svg>
  );
}
